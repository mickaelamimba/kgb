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
 *              collectionOperations={"get"={
 *          "normalization_context"={"groups"={"stashs_read"}},
 *     },
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
     * @Groups({"stashs_read","missions_read_operation"})
     */
    private $id;

    /**
     * @ORM\Column(type="bigint")
     * @Groups({"stashs_read","missions_read_operation"})
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stashs_read","missions_read_operation"})
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stashs_read","missions_read_operation"})
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"stashs_read","missions_read_operation"})
     */
    private $type;

    /**
     * @ORM\ManyToMany(targetEntity=Missions::class, mappedBy="stashMission")
     * 
     */
    private $missions;

    public function __construct()
    {
        $this->missions = new ArrayCollection();
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
    public function getMissions(): Collection
    {
        return $this->missions;
    }

    public function addMission(Missions $mission): self
    {
        if (!$this->missions->contains($mission)) {
            $this->missions[] = $mission;
            $mission->addStashMission($this);
        }

        return $this;
    }

    public function removeMission(Missions $mission): self
    {
        if ($this->missions->removeElement($mission)) {
            $mission->removeStashMission($this);
        }

        return $this;
    }
}
