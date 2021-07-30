<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\StashsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     paginationItemsPerPage=13,
 *     normalizationContext={"groups"={"stashs:read"}},
 *     denormalizationContext={"groups"={"stashs:write"}},
 *              collectionOperations={
 *     "get",
 *     "post"
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *        "delete",
 *
 *     }
 *
 *
 * )
 * @ORM\Entity(repositoryClass=StashsRepository::class)
 */
class Stashs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"stashs:read","missions:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"stashs:read","missions:read","stashs:write"})
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stashs:read","missions:read","stashs:write"})
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stashs:read","missions:read","stashs:write"})
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stashs:read","missions:read","stashs:write"})
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity=Missions::class, mappedBy="stashs")
     */
    private $stashMission;


    public function __construct()
    {
        $this->stashMission = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|Missions[]
     */
    public function getStashMission(): Collection
    {
        return $this->stashMission;
    }

    public function addStashMission(Missions $stashMission): self
    {
        if (!$this->stashMission->contains($stashMission)) {
            $this->stashMission[] = $stashMission;
            $stashMission->setStashs($this);
        }

        return $this;
    }

    public function removeStashMission(Missions $stashMission): self
    {
        if ($this->stashMission->removeElement($stashMission)) {
            // set the owning side to null (unless already changed)
            if ($stashMission->getStashs() === $this) {
                $stashMission->setStashs(null);
            }
        }

        return $this;
    }


}
