<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use App\Repository\AgentsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *          collectionOperations={"get"={
 *          "normalization_context"={"groups"={"agents_read"}},
 *     },
 *     "post"
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *         "delete",
 *
 *     }
 *
 *
 * )
 * @ApiFilter(OrderFilter::class, properties={"lastName","birthDate"
 * ,"firstName","nationality","missions","agentSpecialties"})
 * @ORM\Entity(repositoryClass=AgentsRepository::class)
 */
class Agents
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *@Groups({"agents_read","missions_read_operation"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"agents_read","missions_read_operation"})
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     *  @Groups({"agents_read","missions_read_operation"})
     */
    private $firstName;

    /**
     * @ORM\Column(type="date")
     *  @Groups({"agents_read","missions_read_operation"})
     */
    private $birthDate;

    /**
     * @ORM\Column(type="bigint")
     *  @Groups({"agents_read","missions_read_operation"})
     */
    private $indentificationCode;

    /**
     * @ORM\Column(type="string", length=255)
     *  @Groups({"agents_read","missions_read_operation"})
     */
    private $nationality;

    /**
     * @ORM\ManyToMany(targetEntity=Specialties::class, inversedBy="agents")
     *
     */
    private $agentSpecialties;

    /**
     * @ORM\ManyToOne(targetEntity=Missions::class, inversedBy="agentMission")
     * @ORM\JoinColumn(nullable=false)
     *
     */
    private $missions;

    public function __construct()
    {
        $this->agentSpecialties = new ArrayCollection();
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

    public function getIndentificationCode(): ?string
    {
        return $this->indentificationCode;
    }

    public function setIndentificationCode(string $indentificationCode): self
    {
        $this->indentificationCode = $indentificationCode;

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
     * @return Collection|Specialties[]
     */
    public function getAgentSpecialties(): Collection
    {
        return $this->agentSpecialties;
    }

    public function addAgentSpecialty(Specialties $agentSpecialty): self
    {
        if (!$this->agentSpecialties->contains($agentSpecialty)) {
            $this->agentSpecialties[] = $agentSpecialty;

        }

        return $this;
    }

    public function removeAgentSpecialty(Specialties $agentSpecialty): self
    {
        $this->agentSpecialties->removeElement($agentSpecialty);



        return $this;
    }

    public function getMissions(): ?Missions
    {
        return $this->missions;
    }

    public function setMissions(?Missions $missions): self
    {
        $this->missions = $missions;

        return $this;
    }
}
