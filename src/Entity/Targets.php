<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TargetsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     paginationEnabled=false,
 *     normalizationContext={"groups"={"tatgets:read"}},
 *     denormalizationContext={"groups"={"tatgets:write"}},
 *      collectionOperations={
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
 * )
 * @ORM\Entity(repositoryClass=TargetsRepository::class)
 */
class Targets
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"tatgets:read","missions:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"tatgets:read","missions:read","tatgets:write"})
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"tatgets:read","missions:read","tatgets:write"})
     */
    private $firstName;

    /**
     * @ORM\Column(type="date")
     * @Groups({"tatgets:read","missions:read","tatgets:write"})
     */
    private $birthDate;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"tatgets:read","missions:read","tatgets:write"})
     */
    private $codeName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"tatgets:read","missions:read","tatgets:write"})
     */
    private $nationality;

    /**
     * @ORM\ManyToMany(targetEntity=Missions::class, inversedBy="targets")
     */
    private $targetsMissions;



    public function __construct()
    {
        $this->targetsMissions = new ArrayCollection();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getCodeName(): ?string
    {
        return $this->codeName;
    }

    public function setCodeName(string $codeName): self
    {
        $this->codeName = $codeName;

        return $this;
    }

    public function getNationality(): ?string
    {
        return $this->nationality;
    }

    public function setNationality(string $nationality): self
    {
        $this->nationality = $nationality;

        return $this;
    }

    /**
     * @return Collection|Missions[]
     */
    public function getTargetsMissions(): Collection
    {
        return $this->targetsMissions;
    }

    public function addTargetsMission(Missions $targetsMission): self
    {
        if (!$this->targetsMissions->contains($targetsMission)) {
            $this->targetsMissions[] = $targetsMission;
        }

        return $this;
    }

    public function removeTargetsMission(Missions $targetsMission): self
    {
        $this->targetsMissions->removeElement($targetsMission);

        return $this;
    }

}
